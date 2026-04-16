import { render, screen } from '@testing-library/react';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import EasyTech from './components/easytech/EasyTech';
import Resume from './components/resume/Resume';
import resumeData from './resumeData';

describe('portfolio content', () => {
  test('resume only renders achievements that exist', () => {
    render(<Resume resumeData={resumeData} />);

    expect(
      screen.getByText(/Led the development and maintenance of complex testing systems/i)
    ).toBeInTheDocument();

    const emptyListItems = screen
      .getAllByRole('listitem')
      .filter((item) => item.textContent.trim() === '');

    expect(emptyListItems).toHaveLength(0);
  });

  test('about resume link uses safe rel attributes', () => {
    render(<About resumeData={resumeData} />);

    expect(
      screen.getByRole('link', { name: /download resume/i })
    ).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
    expect(
      screen.getByRole('link', { name: /download resume/i })
    ).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  test('hero social links are accessible by name', () => {
    render(<Header resumeData={resumeData} />);

    expect(screen.getByLabelText('Linked In')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/abhijeet-karmaker/'
    );
    expect(screen.getByLabelText('GitHub')).toHaveAttribute(
      'href',
      'https://github.com/abhikarmaker'
    );
  });

  test('footer shows the current year', () => {
    render(<Footer resumeData={resumeData} />);

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Abhijeet Karmaker`))
    ).toBeInTheDocument();
  });

  test('easytech section links to the business website', () => {
    render(<EasyTech resumeData={resumeData} />);

    expect(screen.getByRole('link', { name: /visit easytech vancouver/i })).toHaveAttribute(
      'href',
      'https://easytechvancouver.ca'
    );
  });
});
