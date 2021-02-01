/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    <a {...props}>{children}</a>
  </NextLink>
);

Link.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
