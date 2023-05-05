import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section>
        <ul>
          <li>
            <h3>Who am I?</h3>
            <p>
              A Front-End Developer who values user experience the most
              <br />
              I&apos;m interested in documentation, project planning and UX, UI
            </p>
          </li>
          <li>
            <h3>Career</h3>
            <p>BankClear (2022.03 - )</p>
            <p>Admin Page - JSP, JAVA, JavaScript, jQuery, HTML, CSS</p>
            <p>KOS APP - JSP, JAVA, JavaScript, jQuery, HTML, CSS</p>
            <p>KOS PC version - React.js</p>
          </li>
          <li>
            <h3>Education</h3>
            <p>Namseoul University - Industrial Management Engineering</p>
            <p>KSE - Smart Factory</p>
          </li>
        </ul>
      </section>
    </>
  );
}
