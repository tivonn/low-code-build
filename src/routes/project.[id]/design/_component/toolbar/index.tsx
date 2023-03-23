import { Button } from '@douyinfe/semi-ui';
import styles from './index.module.less';

const Toolbar: React.FC = () => (
  <div className={styles.toolbar}>
    <Button type="tertiary" size="small">
      撤回
    </Button>
    <Button type="tertiary" size="small">
      反撤回
    </Button>
  </div>
);

export default Toolbar;
