import { ErrorWithStatus, FieldStatus } from './types.ts'

export default function createErrStatus(
  message: string,
  status = 400
): ErrorWithStatus {
  return {
    [FieldStatus]: status,
    message,
    ok: false,
  }
}
