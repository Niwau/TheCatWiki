import { StyledBadge } from "./Badge.styles";

interface BadgeProps {
	image: string,
	path: string,
	name: string,
	country: string,
}

export const Badge = ({ image, path, name, country } : BadgeProps) => {
  return (
    <StyledBadge href={path}>
      <img src={image}/>
      <aside>
				<h1>{name}</h1>
				<h3>{country}</h3>
			</aside>
    </StyledBadge>
  );
};
