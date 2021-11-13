/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthContextProvider';
import '../../../styles/components/Header.css';
import { checkProfileImage, toCapitalize } from '../../../utils/common.utils';
import * as S from './Header.Styles';

export default function Header() {
  const { userDetails } = useContext(AuthContext);
  const [signout, setSignOut] = useState(false);

  const fullName =
    toCapitalize(userDetails.first_name) +
    ' ' +
    toCapitalize(userDetails.last_name);

  const { handleLogout } = useContext(AuthContext);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <a href='/home'>
            <img src='/images/home-logo.svg' alt='' />
          </a>
        </S.Logo>

        <S.Search>
          <div>
            <input type='text' placeholder='Search' />
          </div>
          <S.SearchIcon>
            <img src='/images/search-icon.svg' alt='' />
          </S.SearchIcon>
        </S.Search>

        <S.Nav>
          <S.Wrapper>
            <S.NavList>
              <a href='/home'>
                <img src='/images/nav-home.svg' alt='' />
                <span>Home</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a href='/my-networks'>
                <img src='/images/nav-network.svg' alt='' />
                <span>My Network</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a href='/jobs'>
                <img src='/images/nav-jobs.svg' alt='' />
                <span>Jobs</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a href='/messaging'>
                <img src='/images/nav-messaging.svg' alt='' />
                <span>Messaging</span>
              </a>
            </S.NavList>
            <S.NavList>
              <a href='/notification'>
                <img src='/images/nav-notifications.svg' alt='' />
                <span>Notifications</span>
              </a>
            </S.NavList>

            <S.User
              onClick={() => {
                setSignOut(!signout);
              }}
            >
              <div className='profileTab'>
                <img
                  src={checkProfileImage(userDetails.profile_img)}
                  alt={fullName}
                />
                <div>
                  <span>Me</span>
                  <img src='/images/down-icon.svg' alt='' />
                </div>
              </div>
            </S.User>

            {signout && (
              <S.Signout>
                <div className='profileHeader'>
                  <div>
                    <img
                      src={checkProfileImage(userDetails.profile_img)}
                      alt={fullName}
                    />
                    <div>
                      <p>
                        <b>{fullName}</b>
                      </p>
                      <p>{userDetails.description}</p>
                    </div>
                  </div>
                  <a
                    href={`/profile/${userDetails._id}`}
                    className='btn-profile'
                  >
                    View Profile
                  </a>
                </div>

                <div className='accountSettings'>
                  <p>
                    <b>Account</b>
                  </p>
                  <p>Settings & Privacy</p>
                  <p>Help</p>
                  <p>Language</p>
                </div>

                <div className='manageProfile'>
                  <p>
                    <b>Manage</b>
                  </p>
                  <p>Posts & Activity</p>
                  <p>Job Posting Account </p>
                </div>

                <div onClick={handleLogout} className='signoutOption'>
                  Sign Out
                </div>
              </S.Signout>
            )}

            <S.Work>
              <div className='profileTab'>
                <img src='/images/nav-work.svg' alt='' />
                <div>
                  <span>Work</span>
                  <img src='/images/down-icon.svg' alt='' />
                </div>
              </div>
            </S.Work>
          </S.Wrapper>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
}
