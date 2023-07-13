import mottoStyles from '@/styles/components/Motto.module.scss';
import { LinkIds } from '@/src/enums/links';
import yaml from '@/templates/home.yaml';

export const MottoSection = () => {
  const { content } = yaml.mottoSection;
  return (
    <section className={mottoStyles['motto-section']} id={LinkIds.MOTTO_ID}>
      <div
        className={`scroll ${mottoStyles['watermark-wrap']}`}
        data-rate=".3"
        data-direction="vertical"
      >
        <p className={`${mottoStyles.watermark}`}>Brand</p>
      </div>
      <p className={mottoStyles['section-heading']}>Why me?</p>
      <div className={mottoStyles['grid-container']}>
        {content.map((data) => {
          return (
            <div
              className={`${mottoStyles.widget}`}
              key={data.subheading}
              style={{
                backgroundColor: data.background,
                color: data.color,
              }}
            >
              <div className={`wrapper mg-top-0 ${mottoStyles.wrapper}`}>
                <p className={mottoStyles.subheading} data-scroll>
                  {data.subheading}
                </p>
                <h2 className={mottoStyles.title} data-scroll>
                  {data.title}
                </h2>
                <p className={mottoStyles.description} data-scroll>
                  {data.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MottoSection;
