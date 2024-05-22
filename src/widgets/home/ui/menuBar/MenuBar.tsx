import './menuBar.scss';
import fiCalender from '@/assets/fiCalendar.svg';
import addIcon from '@/assets/addIcon.svg';
import fiAchive from '@/assets/fiArchive.svg';
import { useScrollEndFixed } from '../../model/useScrollEndFixed';

interface MenuBarProps {
  isFixed?: boolean;
}

const MenuBar = ({ isFixed }: MenuBarProps) => {
  const { menubarFixed } = useScrollEndFixed(isFixed);

  return (
    <div className={menubarFixed ? 'menubar_blur' : 'menubar_nonblur'}>
      <div className="menubar">
        <div className="move_home_btn">
          <img src={fiCalender} alt="calendar" />
        </div>
        <div className="add_btn">
          <img src={addIcon} alt="add_icon" />
        </div>
        <div className="penalty_btn">
          <img src={fiAchive} alt="fiAchive" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
