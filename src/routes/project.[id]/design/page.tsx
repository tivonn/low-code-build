import Header from './_component/header';
import Manager from './_component/manager';
import Toolbar from './_component/toolbar';
import Canvas from './_component/canvas';
import Config from './_component/config';
import styles from './index.module.less';

const Design: React.FC = () => (
  <div className={styles.design}>
    <Header />
    <div className={styles.designBody}>
      <Manager />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Canvas />
      </div>
      <Config />
    </div>
  </div>
);

export default Design;
