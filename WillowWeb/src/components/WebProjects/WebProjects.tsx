import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./WebProjects.css";

interface WebProject {
  id: string;
  titleKey: string;
  descKey: string;
  url: string;
  isFeatured?: boolean;
  imageFallback: string;
  imageSrc: string;
}

const projectsData: WebProject[] = [
  {
    id: "traif",
    titleKey: "project_traif_title",
    descKey: "project_traif_desc",
    url: "https://traif.art",
    isFeatured: true,
    imageFallback: "TRAIF",
    imageSrc: "https://picsum.photos/seed/traif/1200/800"
  },
  {
    id: "ayc",
    titleKey: "project_ayc_title",
    descKey: "project_ayc_desc",
    url: "https://aycfincaraiz.com",
    imageFallback: "A&Y",
    imageSrc: "https://picsum.photos/seed/ayc/800/600"
  },
  {
    id: "biosalud",
    titleKey: "project_biosalud_title",
    descKey: "project_biosalud_desc",
    url: "https://bioatom.net",
    imageFallback: "BIO",
    imageSrc: "https://picsum.photos/seed/bio/800/600"
  },
  {
    id: "nardo",
    titleKey: "project_nardo_title",
    descKey: "project_nardo_desc",
    url: "https://nardo.app",
    imageFallback: "NARDO",
    imageSrc: "https://picsum.photos/seed/nardo/800/600"
  },
  {
    id: "martinika",
    titleKey: "project_martinika_title",
    descKey: "project_martinika_desc",
    url: "https://martinika.com",
    imageFallback: "MART",
    imageSrc: "https://picsum.photos/seed/martinika/800/600"
  },
  {
    id: "kongfit",
    titleKey: "project_kongfit_title",
    descKey: "project_kongfit_desc",
    url: "https://kongflix.com",
    imageFallback: "KONG",
    imageSrc: "https://picsum.photos/seed/kongfit/800/600"
  }
];

export function WebProjects() {
  const { t } = useTranslation();
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="web-projects-container">
      {projectsData.map((project) => (
        <WebProjectCard key={project.id} project={project} basePath={basePath} />
      ))}
    </div>
  );
}

const WebProjectCard: React.FC<{ project: WebProject; basePath: string }> = ({ project, basePath }) => {
  const { t } = useTranslation();
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`web-project-card ${project.isFeatured ? "featured" : ""}`}>
      <div className="web-project-image-container">
        {!imgError ? (
          <img 
            src={project.imageSrc} 
            alt={t(project.titleKey)} 
            className="web-project-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="web-project-placeholder-text">{project.imageFallback}</span>
        )}
      </div>
      <div className="web-project-content">
        <h3 className="web-project-title">{t(project.titleKey, project.imageFallback)}</h3>
        <p className="web-project-desc">{t(project.descKey, "Descripción del proyecto no disponible.")}</p>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="web-project-link"
        >
          {t("view_project", "VER PROYECTO")}
        </a>
      </div>
    </div>
  );
};
