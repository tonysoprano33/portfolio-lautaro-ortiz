export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Lenguajes de Programación",
    skills: ["Python", "TypeScript", "SQL", "JavaScript"]
  },
  {
    name: "Bases de Datos",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "BigQuery", "Snowflake"]
  },
  {
    name: "Visualización & BI",
    skills: ["Tableau", "Power BI", "Looker", "Matplotlib", "Seaborn", "ggplot2"]
  },
  {
    name: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "Pandas", "NumPy"]
  },
  {
    name: "Cloud & Big Data",
    skills: ["AWS", "Google Cloud", "Azure", "Spark", "Databricks", "Airflow"]
  },
  {
    name: "Herramientas",
    skills: ["Git", "Docker", "Jupyter", "Excel Avanzado", "ETL Tools"]
  }
];

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "AWS Certified Data Analytics - Specialty",
  "Microsoft Certified: Power BI Data Analyst Associate",
  "Tableau Desktop Specialist"
];
