import React from 'react';

const Profiles = [
  {
    key: 111,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/hari-vikinesh/",
    class: "fa-brands fa-linkedin fa-2x",
  },
  {
    key: 112,
    label: "GitHub",
    link: "https://github.com/hari-vickey",
    class: "fa-brands fa-github fa-2x",
  },
  {
    key: 113,
    label: "Instagram",
    link: "https://www.instagram.com/_hari_vickey_/",
    class: "fa-brands fa-instagram fa-2x",
  },
]

export default function Footer() {
  return (
    <footer>
      <div className='footer-part'>&copy; 2023, Hari Vikinesh.</div>
      <div className='footer-part'>
        {Profiles.map((item) => {
          return (
            <span key={item.key} className='brands'>
              <a aria-label={item.label} href={item.link}>
                <i className={item.class}></i>
              </a>
            </span>
          )
        })}
      </div>
  </footer>
  );
}