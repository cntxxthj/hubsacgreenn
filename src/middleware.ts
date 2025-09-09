// src/middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // REGRA 1: Se o usuário NÃO estiver logado E tentar acessar o dashboard...
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    // ... jogue ele de volta para a página de login.
    return NextResponse.redirect(new URL('/', req.url));
  }

  // REGRA 2: Se o usuário ESTIVER logado E tentar acessar a página de login...
  if (session && req.nextUrl.pathname === '/') {
    // ... jogue ele para dentro do dashboard.
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Se nenhuma regra for quebrada, deixe o usuário passar.
  return res;
}

// Define em quais rotas o segurança deve trabalhar
export const config = {
  matcher: [
    '/', 
    '/dashboard/:path*'
  ],
};