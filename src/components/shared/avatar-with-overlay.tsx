import { AnchoredOverlay, Avatar, Link } from "@primer/react";
import { useRef, useState } from "react";
import { User } from "../../types/issue";

type AvatarWithOverlayProps = {
  author: User;
};

export const AvatarWithOverlay = ({ author }: AvatarWithOverlayProps) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  let closeTimeout: number | undefined;

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setOpen(false), 150);
  };

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      width="medium"
      onClose={() => setOpen(false)}
      anchorRef={anchorRef as React.RefObject<HTMLElement>}
      renderAnchor={(props) => (
        <div
          {...props}
          ref={anchorRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ display: "inline-block" }}
        >
          <Avatar size={28} src={author.avatar_url} alt={author.repos_url} />
        </div>
      )}
    >
      <div
        className="p-2 flex items-center gap-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar size={48} src={author.avatar_url} alt={author.repos_url} />
        <Link href={author.html_url} target="_blank">
          <span className="font-semibold text-lg">{author.login}</span>
        </Link>
      </div>
    </AnchoredOverlay>
  );
};
