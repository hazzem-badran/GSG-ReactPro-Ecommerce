interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl sm:text-4xl font-semibold text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm sm:text-base text-balance">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthHeader;
