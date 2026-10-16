/* eslint-disable no-console */

import { NextRequest, NextResponse } from 'next/server';

// ── 2026-10-16 大丫改：私人自用，关闭登录闸门 ─────────────────────────────
// 主人指示：「这个登录的密码实际上也不需要存在。因为这个就我们自己亲朋好友
// 用一下而已，这个项目里面所有资源也不是我的。」
//
// 原逻辑（见 git 历史 / src/middleware.ts.bak-before-noauth）：
//   · 无 PASSWORD      → 全站跳 /warning
//   · 有 PASSWORD 但 cookie 不匹配 → /api/** 返回 401，其余跳 /login
// 新逻辑：一律直接放行。
//
// ⚠️ 影响面：/api/** 不再需要登录（含 douban / search / detail / favorites /
//    playrecords / image-proxy），首页豆瓣板块与图片代理随之恢复。
// 回滚：恢复 src/middleware.ts.bak-before-noauth 即可（并重启/重新部署）。
export async function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|login|warning|api/login|api/register|api/logout|api/cron|api/server-config).*)',
  ],
};
