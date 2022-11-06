import React, { useState } from 'react';
import styled from 'styled-components';
import SubTitle from '../../Components/SubTitle';
import { Column } from '../Cart';
import contents from './content';
const HowToClik = ({ home }: { home?: boolean }) => {
  const [tab, setTab] = useState<'android' | 'apple' | 'apple_old'>('android');
  const handleClickTab: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    const clicked = e.currentTarget.id;
    if (tab !== clicked) {
      setTab(clicked as 'android' | 'apple' | 'apple_old');
    }
  };
  return (
    <div>
      {!home && <SubTitle title="How to use Clik" />}
      <Column>
        <ComponentWrapper>
          <UpperWrapper>
            <Tab
              active={tab === 'android'}
              onClick={handleClickTab}
              id="android"
              home={!!home}
            >
              <LeftSecTab>
                <UpperText home={!!home}>Clik to Androids</UpperText>
                <BottomText>Every Android with NFC</BottomText>
              </LeftSecTab>
              <RightSecTab
                src={`Images/${home ? 'android_white.svg' : 'android.svg'}`}
              />
            </Tab>
            <Tab
              active={tab === 'apple'}
              id="apple"
              onClick={handleClickTab}
              home={!!home}
            >
              <LeftSecTab>
                <UpperText home={!!home}>Clik to new apples</UpperText>
                <BottomText>apple XR, XS, 11, 12, 13</BottomText>
              </LeftSecTab>

              <RightSecTab
                src={`Images/${home ? 'apple_white.svg' : 'apple.svg'}`}
              />
            </Tab>
            <Tab
              active={tab === 'apple_old'}
              id="apple_old"
              onClick={handleClickTab}
              home={!!home}
            >
              <LeftSecTab>
                <UpperText home={!!home}>Clik to old apples</UpperText>
                <BottomText>apple 6, 7, 8, X</BottomText>
              </LeftSecTab>
              <RightSecTab
                src={`Images/${
                  home ? 'apple_old_white.svg' : 'android_old.svg'
                }`}
              />
            </Tab>
          </UpperWrapper>
          <BottomWrapper home={!!home}>
            {/* <ContentImage src="Images/how_to_clik.png" /> */}
            <LeftSecTab>
              <ContentUpperText home={home}>Clik to Androids</ContentUpperText>
              <ContentText home={home}>
                {
                  contents[
                    tab as keyof {
                      android: string;
                      apple: string;
                      apple_old: string;
                    }
                  ].content
                }
              </ContentText>
              {!!contents[
                tab as keyof {
                  android: string;
                  apple: string;
                  apple_old: string;
                }
              ].important && (
                <>
                  <ContentTitle home={home}>Important!</ContentTitle>
                  <ContentText home={home}>
                    {
                      contents[
                        tab as keyof {
                          android: string;
                          apple: string;
                          apple_old: string;
                        }
                      ].important
                    }
                  </ContentText>
                </>
              )}
              {!!contents[
                tab as keyof {
                  android: string;
                  apple: string;
                  apple_old: string;
                }
              ].youAlways && (
                <>
                  <ContentTitle home={home}>
                    You Always Have a Backup!
                  </ContentTitle>
                  <ContentText home={home}>
                    {
                      contents[
                        tab as keyof {
                          android: string;
                          apple: string;
                          apple_old: string;
                        }
                      ].youAlways
                    }
                  </ContentText>
                </>
              )}
            </LeftSecTab>
          </BottomWrapper>
        </ComponentWrapper>
      </Column>
    </div>
  );
};

export default HowToClik;
const ContentTitle = styled.div<{
  home?: boolean;
}>`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: ${({ home }) => (home ? '#FF8B00' : '#444444')};
  margin-top: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;
const ContentUpperText = styled.div<{
  home?: boolean;
}>`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 62px;
  color: ${({ home }) => (home ? '#FF8B00' : '#444444')};
  @media only screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 55px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 30px;
    line-height: 45px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 26px;
    line-height: 38px;
  }
`;
const ContentText = styled.div<{
  home?: boolean;
}>`
  font-weight: 400;
  font-size: 24px;
  color: ${({ home }) => (home ? 'white' : '#444444')};
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  /* height: 707px; */
  margin: 30px 0px 100px;
  @media only screen and (max-width: 1000px) {
    width: 800px;
  }

  @media only screen and (max-width: 800px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 380px;
  }
`;
const LeftSecTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const UpperText = styled.div<{ home: boolean }>`
  color: ${({ home }) => (home ? '#FFFFFF' : '#444444')};
  font-weight: 700;
  font-size: 20px;
  @media only screen and (max-width: 1000px) {
    font-size: 17px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 11px;
  }
`;
const BottomText = styled.div`
  color: #b7b7b7;
  font-weight: 400;
  font-size: 16px;
  @media only screen and (max-width: 1000px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 8px;
  }
`;
const RightSecTab = styled.img`
  height: 64px;
  width: 64px;
  @media only screen and (max-width: 1000px) {
    height: 44px;
    width: 44px;
  }
  @media only screen and (max-width: 800px) {
    height: 36px;
    width: 36px;
  }
  @media only screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;
const Tab = styled.div<{
  active: boolean;
  home: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 36px;
  cursor: pointer;
  background-color: ${({ active, home }) =>
    active && home
      ? 'rgba(255, 255, 255, 0.1)'
      : active
      ? '#F4F4F4'
      : 'transparent'};
  width: 33.3%;
  height: 100px;
  margin-bottom: 4px;
  border-radius: 25px 25px 0px 0px;
  @media only screen and (max-width: 1000px) {
    padding: 22px 32px;
  }
  @media only screen and (max-width: 800px) {
    padding: 18px 20px;
  }
  @media only screen and (max-width: 600px) {
    padding: 16px 18px;
  }
`;
const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BottomWrapper = styled.div<{ home: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 69px 67px;
  /* height: 507px; */
  width: 1000px;
  background-color: ${({ home }) =>
    home ? 'rgba(255, 255, 255, 0.1)' : '#f4f4f4'};
  border-radius: 0px 0px 25px 25px;

  @media only screen and (max-width: 1000px) {
    width: 800px;
  }

  @media only screen and (max-width: 800px) {
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    width: 380px;
  }
`;
