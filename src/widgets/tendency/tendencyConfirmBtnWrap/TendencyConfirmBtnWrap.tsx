import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import './tendencyConfirmBtnWrap.scss';

const TendencyConfirmBtnWrap = () => {
  return (
    <button className="tendency_confirm_btn_wrap">
      <PrimaryShinBtn
        text="다음"
        onClick={() => {
          console.log('다음 로직');
        }}
      />
    </button>
  );
};

export default TendencyConfirmBtnWrap;
