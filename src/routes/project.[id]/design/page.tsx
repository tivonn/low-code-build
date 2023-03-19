import Header from './_component/header';
import Sidebar from './_component/sidebar';
import styles from './index.module.less';

const Design: React.FC = () => (
  <div className={styles.design}>
    <Header />
    <div className={styles.designBody}>
      <Sidebar />
      <div style={{ flex: 1 }}>canvas</div>
      <div style={{ width: '400px' }}>config</div>
    </div>
  </div>
);

export default Design;
