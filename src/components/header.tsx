import mainLogo from '@/assets/icon/logo.svg';

export function Header() {
  return (
    <header className="flex items-center justify-center bg-main h-16 p-1">
      <a href="/" target="_blank">
        <img src={mainLogo} className="logo w-32 h-5" alt="User logo" />
      </a>
    </header>
  );
}
