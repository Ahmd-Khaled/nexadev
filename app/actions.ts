// app/actions.ts
'use server';

import { cookies } from 'next/headers';

export async function setLocaleCookie(newLocale: string) {
  const store = await cookies();
  store.set('locale', newLocale);
}
