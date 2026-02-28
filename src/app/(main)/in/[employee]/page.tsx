import EmployeeClient from "./EmployeeClient";

export function generateStaticParams() {
  // Pre-generate a few sample employee profiles
  return [
    { employee: "kupendra" },
    { employee: "faizan" },
    { employee: "john-doe" },
  ];
}

export default function EmployeePage({ params }: { params: { employee: string } }) {
  return <EmployeeClient employee={params.employee} />;
}