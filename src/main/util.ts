import { format, parseISO } from 'date-fns';
import bcrypt from 'bcryptjs';
import { URL, format as formatURL } from 'url';
import path from 'path';

export { PrismaClient } from './prisma/generated/client';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return formatURL({
    pathname: path.resolve(__dirname, '../renderer/', htmlFileName),
    protocol: 'file:',
    slashes: true
  });
}

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
export const comparePassword = async (enteredPassword: string, hashedPassword: string) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};

export const getDate = (date: string) => parseISO(format(new Date(date), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"));
