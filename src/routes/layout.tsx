import { Helmet } from '@modern-js/runtime/head';
import { Outlet } from '@modern-js/runtime/router';

import 'normalize.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './app.less';

export default function Layout() {
  return (
    <div className="h-screen">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <Outlet />
    </div>
  );
}
