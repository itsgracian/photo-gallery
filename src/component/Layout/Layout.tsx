import React, { FC } from 'react';
import { ThemeContext, themes } from '../../theme';
import './style.css';

const Layout: FC = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div
          className='layoutScreen'
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div
            className='header'
            style={{ backgroundColor: theme.backgroundColor }}
          >
            <ul className='list'>
              <li>
                <a
                  href='https://github.com/itsgracian/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: theme.color }}
                >
                  <span className='ion-social-github'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/itsgracian'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: theme.color }}
                >
                  <span className='ion-social-twitter-outline'></span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/gratien-tuyishimire-255469113/'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ color: theme.color }}
                >
                  <span className='ion-social-linkedin'></span>
                </a>
              </li>
            </ul>
            <div
              className='toggleTheme'
              style={{
                backgroundColor:
                  theme.backgroundColor === themes.black.backgroundColor
                    ? '#fff'
                    : themes.black.backgroundColor,
              }}
              onClick={toggleTheme}
            >
              <div
                className='toggleBall'
                style={{
                  backgroundColor: theme.backgroundColor,
                  float:
                    theme.backgroundColor === themes.black.backgroundColor
                      ? 'right'
                      : 'left',
                }}
              ></div>
            </div>
          </div>
          {props.children}
          <div className='bottom'>
            <div className='logo'>
              <h3>Photo Gallery</h3>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Layout;
