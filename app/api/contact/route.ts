import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError: any) {
      console.error('JSON parse error:', parseError)
      return NextResponse.json(
        { error: parseError.message || 'Invalid JSON in request body. Please check your form data.' },
        { status: 400 }
      )
    }
    
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Invalid request body format' },
        { status: 400 }
      )
    }
    
    const { firstName, lastName, email, phoneNumber, countryCode, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate environment variables
    const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    if (!clientEmail || !privateKeyRaw || !spreadsheetId) {
      console.error('Missing Google Sheets credentials')
      return NextResponse.json(
        { error: 'Google Sheets configuration is incomplete' },
        { status: 500 }
      )
    }

    // Format private key for Vercel/production
    // In Vercel, the private key is stored as a string with \n escaped
    // We need to convert those escaped newlines to actual newlines
    let privateKey = privateKeyRaw.trim()
    
    // Handle different newline formats that might be in the env variable
    // Replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n')
    
    // If the key still doesn't have newlines, try to add them manually
    // This handles cases where the key was pasted without proper formatting
    if (!privateKey.includes('\n') && privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
      // The key might be on a single line, try to format it
      privateKey = privateKey
        .replace(/-----BEGIN PRIVATE KEY-----/, '-----BEGIN PRIVATE KEY-----\n')
        .replace(/-----END PRIVATE KEY-----/, '\n-----END PRIVATE KEY-----')
    }
    
    // Ensure the key has proper BEGIN/END markers
    if (!privateKey.includes('BEGIN PRIVATE KEY') || !privateKey.includes('END PRIVATE KEY')) {
      console.error('Private key missing proper markers')
      return NextResponse.json(
        { error: 'Invalid private key format - missing BEGIN or END markers' },
        { status: 500 }
      )
    }
    
    // Ensure the key ends with a newline (some systems require this)
    if (!privateKey.endsWith('\n')) {
      privateKey += '\n'
    }

    // Initialize Google Sheets API
    let auth
    try {
      auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      })
    } catch (authError: any) {
      console.error('Google Auth initialization error:', authError.message)
      return NextResponse.json(
        { error: 'Failed to initialize Google Sheets authentication' },
        { status: 500 }
      )
    }

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare the row data
    const timestamp = new Date().toISOString()
    const rowData = [
      timestamp,
      firstName,
      lastName,
      email,
      phoneNumber || '',
      countryCode || '',
      message || '',
    ]

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G', // Adjust range based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    )
  }
}

