import mottoStyles from '@/styles/components/Motto.module.scss';

import yaml from '@/templates/about.yaml';

export const MottoSection = () => {
  const { content } = yaml.mottoSection;
  return (
    <section className={mottoStyles['motto-section']}>
      <div
        className={`scroll ${mottoStyles['watermark-wrap']}`}
        data-rate=".3"
        data-direction="vertical"
      >
        <p className={`${mottoStyles.watermark}`}>Brand</p>
      </div>
      <p className={mottoStyles['section-heading']}>My motto</p>
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
                <p className={mottoStyles.subheading}>{data.subheading}</p>
                <h2 className={mottoStyles.title}>{data.title}</h2>
                <p className={mottoStyles.description}>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default MottoSection;
