import { Document, PassportLocalDocument  } from 'mongoose';

export interface User extends PassportLocalDocument  {
    readonly ID: string
    readonly firstname: string
    readonly name: string
    readonly email: string
    readonly created_at: Date
    readonly password : string
}