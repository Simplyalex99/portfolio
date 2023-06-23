import styles from '@/styles/components/Watermark.module.scss';

type Props = {
  watermark: string;
  heading: string;
};

export const WatermarkSection = (props: Props) => {
  const { heading, watermark } = props;
  return (
    <>
      <div
        className={`scroll ${styles['watermark-wrap']}`}
        data-rate=".3"
        data-direction="vertical"
      >
        <p className={`${styles.watermark}`}>{watermark}</p>
      </div>
      <p className={styles['section-heading']}>{heading}</p>
    </>
  );
};
export default WatermarkSection;
