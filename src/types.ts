export interface SubstanceTier {

  'Lower': number;
  'Upper': number;
  'CI Lower': number;
  'CI Upper': number;
}

export interface SubstanceData {
  substance: string;
  method: string;
  unit: string;
  tiers: {
    Threshold: SubstanceTier;
    Light: SubstanceTier;
    Common: SubstanceTier;
    Strong: SubstanceTier;
    Heavy: SubstanceTier;
  };
  reliability_score: number;
  distribution_type: string;
  sample_size: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}