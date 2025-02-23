import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export interface FormSubmission {
  name: string;
  email: string;
  university: string;
  faculty: string;
  answers: string[];
  submittedAt: Date;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, university, faculty, answers } = body;

    const { db } = await connectToDatabase();

    const submission: FormSubmission = {
      name,
      email,
      university,
      faculty,
      answers,
      submittedAt: new Date(),
    };

    const result = await db.collection('submissions').insertOne(submission);

    return NextResponse.json({ success: true, id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}