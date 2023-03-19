import { Helmet } from '@modern-js/runtime/head';

import 'normalize.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './index.less';

// import Main from './pages/design';
import { Button } from '@douyinfe/semi-ui';

const Index: React.FC = () => (
  <div className="app">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <div>
      123
      <Button>123</Button>
    </div>
    {/* <Main /> */}
  </div>
);

export default Index;
