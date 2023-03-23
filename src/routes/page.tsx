import { Button } from '@douyinfe/semi-ui';
import { Link } from '@modern-js/runtime/router';
import styles from './index.module.less';

const Index: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <Link to="/project/1/design">
        <Button type="tertiary">快速开始</Button>
      </Link>
      <p>这是漂亮的首页</p>
    </div>
  );
};

export default Index;
