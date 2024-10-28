import AOS from 'aos';
import { PropsWithChildren } from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface AnimateProps extends PropsWithChildren {
  className?: string;
  effect?: string;
}

const Animate = ({ children, className, effect = 'fade-up' }: AnimateProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={className}
      data-aos={effect}
      data-aos-duration="2000"
      data-aos-once="true"
    >
      {children}
    </div>
  );
};

export default Animate;
