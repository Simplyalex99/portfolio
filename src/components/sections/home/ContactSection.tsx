import homeStyles from '@/styles/pages/Home.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Links from '@/src/enums/links';
import { Button } from '../../common/Button';
import { DownLeftArrowSVG } from '../../svg/arrows/DownLeftArrow';
import { MediumSVG } from '../../svg/social/Medium';
import { LinkedinSVG } from '../../svg/social/Linkedin';
import { GithubSVG } from '../../svg/social/Github';
import { SmallAbstractSVG } from '../../svg/others/SmallAbstract';
import { LargeAbstractSVG } from '../../svg/others/LargeAbstract';

type ErrorFieldProps = {
  fieldName: string;
};
const ErrorFieldMessage = ({ fieldName }: ErrorFieldProps) => {
  return (
    <p className={homeStyles['form-error-text']}>Please specify {fieldName}</p>
  );
};

export const ContactSection = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const formHandler = () => {};

  const { MEDIUM_LINK, GITHUB_LINK, LINKEDIN_LINK } = Links;
  return (
    <section className={`${homeStyles['contact-section']} wrapper`}>
      <div className={homeStyles['blob-sm-wrapper']}>
        <SmallAbstractSVG />
      </div>
      <div className={homeStyles['blob-lg-wrapper']}>
        <LargeAbstractSVG />
      </div>
      <h2 className={homeStyles['contact-heading']}>Contact Me</h2>
      <div>
        <form
          className={homeStyles['contact-form']}
          onSubmit={handleSubmit(formHandler)}
        >
          <fieldset className={homeStyles.group}>
            <label htmlFor="name" className={homeStyles['contact-label']}>
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: true })}
              className={`${homeStyles['contact-field']} ${
                errors?.name ? homeStyles['field-error'] : ''
              }`}
            />
            {errors?.name && <ErrorFieldMessage fieldName="name" />}
          </fieldset>
          <fieldset className={homeStyles.group}>
            <label htmlFor="email" className={homeStyles['contact-label']}>
              Email
            </label>
            <input
              id="email"
              {...register('email', { required: true })}
              className={`${homeStyles['contact-field']} ${
                errors?.email ? homeStyles['field-error'] : ''
              }`}
            />
            {errors?.email && <ErrorFieldMessage fieldName="email" />}
          </fieldset>
          <fieldset className={homeStyles.group}>
            <label htmlFor="message" className={homeStyles['contact-label']}>
              Message
            </label>
            <textarea
              id="message"
              {...register('message', { required: true })}
              cols={50}
              className={`${homeStyles['contact-field']} ${
                homeStyles['message-field']
              } ${errors?.message ? homeStyles['field-error'] : ''}`}
            />
            {errors?.message && <ErrorFieldMessage fieldName="message" />}
          </fieldset>
          <div className={homeStyles['form-btn-wrapper']}>
            <Button type="submit" className={homeStyles['form-btn']}>
              Submit
            </Button>
            <DownLeftArrowSVG className={homeStyles['left-arrow']} />
          </div>
        </form>
        <div className={homeStyles['media-wrapper']}>
          <Link href={MEDIUM_LINK} className={homeStyles.icon}>
            <MediumSVG />
          </Link>
          <Link href={LINKEDIN_LINK} className={homeStyles.icon}>
            <LinkedinSVG />
          </Link>
          <Link href={GITHUB_LINK} className={homeStyles.icon}>
            <GithubSVG />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
