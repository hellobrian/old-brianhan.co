import React from 'react';
import './Pagination.css';

export const Pagination = ({ children }) => (
  <nav data-testid="Pagination" className="Pagination">
    <h3>Keep reading</h3>
    <ul>
      {React.Children.toArray(children).map((child, index) => {
        return (
          <li key={index}>
            <Pagination.PageLink>{child}</Pagination.PageLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

const PageLink = ({ children }) => {
  if (!React.Children.only(children)) {
    throw new Error(`Pagination.PageLink only accepts one child`);
  }
  return React.cloneElement(children, {
    ...children.props,
    className: `Pagination__PageLink font-family bold font-smoothing`,
  });
};

Pagination.PageLink = PageLink;
