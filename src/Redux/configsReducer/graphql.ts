import gql from 'graphql-tag';

export const TITLE_FRAGMENT = gql`
  fragment TitleFragment on Title {
    __typename
    _id
    title
  }
`;

export const GLOBAL_LINK_FRAGMENT = gql`
  fragment GlobalLinkFragment on GlobalLink {
    __typename
    _id
    type
    title
    redirectionType
    placeholder
    image {
      _id
    }
  }
`;

export const FIND_ALL_TITLES = gql`
  query findTitles {
    findTitles {
      ...TitleFragment
    }
  }
  ${TITLE_FRAGMENT}
`;

export const FIND_ALL_GLOBAL_LINKS = gql`
  query findAllGlobalLinks {
    findAllGlobalLinks {
      ...GlobalLinkFragment
    }
  }
  ${GLOBAL_LINK_FRAGMENT}
`;

export const ADD_MY_LINK = gql`
  mutation createMyLink($createMyLink: CreateMyLinkInput!) {
    createMyLink(createMyLink: $createMyLink) {
      show
      globalLink {
        _id
        title
        type
        redirectionType
        placeholder
        image {
          _id
        }
      }
      value
    }
  }
`;

export const CUSTOM_LINK_FRAGMENT = gql`
  fragment CustomLinkFragment on CustomLink {
    __typename
    id
    title
    image {
      _id
      filename
    }
    value
    show
  }
`;

export const CREATE_CUSTOM_LINK = gql`
  mutation addCustomLink($addCustomLinkInput: CustomLinkInput!) {
    addCustomLink(addCustomLinkInput: $addCustomLinkInput) {
      ...CustomLinkFragment
    }
  }
  ${CUSTOM_LINK_FRAGMENT}
`;
