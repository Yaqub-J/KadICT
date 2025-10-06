interface BreadcrumbsProps {
  title: string;
  backgroundImage: string;
}

export default function Breadcrumbs({ title, backgroundImage }: BreadcrumbsProps) {
  return (
    <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="container position-relative d-flex flex-column align-items-center">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
