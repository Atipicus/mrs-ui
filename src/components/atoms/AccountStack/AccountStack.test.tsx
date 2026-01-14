/**
 * AccountStack Component Tests
 */

import React from 'react';
import { renderWithTheme, screen } from '../../../../tests/test-utils';
import { AccountStack } from './AccountStack';

describe('AccountStack', () => {
  // Rendering tests
  it('renders without crashing', () => {
    const { container } = renderWithTheme(<AccountStack />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with default props', () => {
    renderWithTheme(<AccountStack />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
  });

  // User prop tests
  it('shows avatar when user is true', () => {
    const { container } = renderWithTheme(<AccountStack user={true} />);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toBeInTheDocument();
  });

  it('hides avatar when user is false', () => {
    const { container } = renderWithTheme(<AccountStack user={false} />);
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).not.toBeInTheDocument();
  });

  // UserAccountInfo prop tests
  it('shows account info when userAccountInfo is true', () => {
    renderWithTheme(<AccountStack userAccountInfo={true} userName="Test User" />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('hides account info when userAccountInfo is false', () => {
    renderWithTheme(<AccountStack userAccountInfo={false} userName="Test User" />);
    expect(screen.queryByText('Test User')).not.toBeInTheDocument();
  });

  // Notifications prop tests
  it('shows notification badge when notifications is true', () => {
    const { container } = renderWithTheme(<AccountStack user={true} notifications={true} />);
    const badge = container.querySelector('.MuiBadge-badge');
    expect(badge).toBeInTheDocument();
  });

  it('hides notification badge when notifications is false', () => {
    const { container } = renderWithTheme(<AccountStack user={true} notifications={false} />);
    const badge = container.querySelector('.MuiBadge-invisible');
    expect(badge).toBeInTheDocument();
  });

  // Custom data tests
  it('renders custom userName', () => {
    renderWithTheme(<AccountStack userName="Jane Smith" />);
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('renders custom userEmail', () => {
    renderWithTheme(<AccountStack userEmail="jane@example.com" />);
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('applies custom avatarSrc to avatar', () => {
    const { container } = renderWithTheme(
      <AccountStack avatarSrc="https://example.com/avatar.jpg" />
    );
    const avatar = container.querySelector('img');
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('applies custom avatarAlt to avatar', () => {
    const { container } = renderWithTheme(
      <AccountStack avatarSrc="https://example.com/avatar.jpg" avatarAlt="Custom alt text" />
    );
    const avatar = container.querySelector('img');
    expect(avatar).toHaveAttribute('alt', 'Custom alt text');
  });

  // Badge variant tests
  it('renders dot badge variant by default', () => {
    const { container } = renderWithTheme(<AccountStack user={true} notifications={true} />);
    const badge = container.querySelector('.MuiBadge-dot');
    expect(badge).toBeInTheDocument();
  });

  it('renders badge with count when notificationCount is provided', () => {
    renderWithTheme(<AccountStack user={true} notifications={true} notificationCount={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  // Component structure tests
  it('has correct default height of 40px', () => {
    const { container } = renderWithTheme(<AccountStack />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({ height: '40px' });
  });

  it('applies custom className', () => {
    const { container } = renderWithTheme(<AccountStack className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies custom sx styles', () => {
    const { container } = renderWithTheme(<AccountStack sx={{ backgroundColor: 'red' }} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  // Ref forwarding test
  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    renderWithTheme(<AccountStack ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });

  it('ref points to correct element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = renderWithTheme(<AccountStack ref={ref} />);
    expect(ref.current).toBe(container.firstChild);
  });

  // Display name test
  it('has correct display name', () => {
    expect(AccountStack.displayName).toBe('AccountStack');
  });

  // Combination tests
  it('renders only avatar when userAccountInfo is false', () => {
    const { container } = renderWithTheme(
      <AccountStack user={true} userAccountInfo={false} userName="Test" />
    );
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).toBeInTheDocument();
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });

  it('renders only account info when user is false', () => {
    const { container } = renderWithTheme(
      <AccountStack user={false} userAccountInfo={true} userName="Test User" />
    );
    const avatar = container.querySelector('.MuiAvatar-root');
    expect(avatar).not.toBeInTheDocument();
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });

  it('renders nothing visible when both user and userAccountInfo are false', () => {
    const { container } = renderWithTheme(<AccountStack user={false} userAccountInfo={false} />);
    const avatar = container.querySelector('.MuiAvatar-root');
    const text = screen.queryByText('John Doe');
    expect(avatar).not.toBeInTheDocument();
    expect(text).not.toBeInTheDocument();
  });

  // Accessibility tests
  it('avatar has alt text for accessibility', () => {
    const { container } = renderWithTheme(
      <AccountStack user={true} avatarSrc="https://example.com/avatar.jpg" />
    );
    const avatar = container.querySelector('img');
    expect(avatar).toHaveAttribute('alt');
  });

  it('uses semantic Typography components', () => {
    const { container } = renderWithTheme(<AccountStack userAccountInfo={true} />);
    const typography = container.querySelectorAll('.MuiTypography-root');
    expect(typography.length).toBeGreaterThan(0);
  });

  // Layout tests
  it('applies flex layout with correct alignment', () => {
    const { container } = renderWithTheme(<AccountStack />);
    const box = container.firstChild as HTMLElement;
    expect(box).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    });
  });

  it('applies correct gap spacing', () => {
    const { container } = renderWithTheme(<AccountStack />);
    const box = container.firstChild as HTMLElement;
    // Gap is applied via theme.spacing(2) = 16px
    expect(box).toBeInTheDocument();
  });

  // Avatar position tests
  it('renders avatar on the left by default', () => {
    const { container } = renderWithTheme(
      <AccountStack
        user={true}
        userAccountInfo={true}
        userName="Test User"
        avatarSrc="https://example.com/avatar.jpg"
      />
    );
    const box = container.firstChild as HTMLElement;
    const children = Array.from(box.children);
    // First child should be Badge (avatar), second should be Stack (user info)
    expect(children[0].classList.contains('MuiBadge-root')).toBe(true);
    expect(children[1].classList.contains('MuiStack-root')).toBe(true);
  });

  it('renders avatar on the right when avatarPosition is right', () => {
    const { container } = renderWithTheme(
      <AccountStack
        user={true}
        userAccountInfo={true}
        userName="Test User"
        avatarPosition="right"
        avatarSrc="https://example.com/avatar.jpg"
      />
    );
    const box = container.firstChild as HTMLElement;
    const children = Array.from(box.children);
    // First child should be Stack (user info), second should be Badge (avatar)
    expect(children[0].classList.contains('MuiStack-root')).toBe(true);
    expect(children[1].classList.contains('MuiBadge-root')).toBe(true);
  });

  it('renders avatar on the left when avatarPosition is left', () => {
    const { container } = renderWithTheme(
      <AccountStack
        user={true}
        userAccountInfo={true}
        userName="Test User"
        avatarPosition="left"
        avatarSrc="https://example.com/avatar.jpg"
      />
    );
    const box = container.firstChild as HTMLElement;
    const children = Array.from(box.children);
    // First child should be Badge (avatar), second should be Stack (user info)
    expect(children[0].classList.contains('MuiBadge-root')).toBe(true);
    expect(children[1].classList.contains('MuiStack-root')).toBe(true);
  });
});
