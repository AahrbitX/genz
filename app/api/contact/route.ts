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
    // In Vercel, when stored as a string, newlines might be escaped differently
    let privateKey = privateKeyRaw.trim()
    
    // First, try to handle if it's stored with literal \n characters (most common in Vercel)
    // Replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n')
    
    // Also handle if it was stored with actual newlines (less common but possible)
    // No change needed if already has newlines
    
    // If the key doesn't have newlines after replacement, it might be stored incorrectly
    // Try to detect and fix common issues
    if (!privateKey.includes('\n')) {
      // Check if BEGIN and END are on the same "line" (no newlines between them)
      if (privateKey.includes('-----BEGIN PRIVATE KEY-----') && privateKey.includes('-----END PRIVATE KEY-----')) {
        // The key content is there but newlines are missing
        // This shouldn't happen if stored correctly, but let's try to fix it
        privateKey = privateKey
          .replace(/-----BEGIN PRIVATE KEY-----/, '-----BEGIN PRIVATE KEY-----\n')
          .replace(/-----END PRIVATE KEY-----/, '\n-----END PRIVATE KEY-----')
      }
    }
    
    // Ensure the key has proper BEGIN/END markers
    if (!privateKey.includes('BEGIN PRIVATE KEY') || !privateKey.includes('END PRIVATE KEY')) {
      console.error('Private key missing proper markers')
      console.error('Key preview (first 50 chars):', privateKeyRaw.substring(0, 50))
      return NextResponse.json(
        { error: 'Invalid private key format - missing BEGIN or END markers' },
        { status: 500 }
      )
    }
    
    // Ensure the key ends with a newline (required by some crypto libraries)
    if (!privateKey.endsWith('\n')) {
      privateKey += '\n'
    }
    
    // Log key format for debugging (first and last 30 chars only, never full key)
    console.log('Private key format check:', {
      hasBegin: privateKey.includes('BEGIN PRIVATE KEY'),
      hasEnd: privateKey.includes('END PRIVATE KEY'),
      hasNewlines: privateKey.includes('\n'),
      keyLength: privateKey.length,
      firstChars: privateKey.substring(0, 30),
      lastChars: privateKey.substring(privateKey.length - 30)
    })

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

