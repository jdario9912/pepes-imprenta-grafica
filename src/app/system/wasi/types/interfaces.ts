interface Cuerpo {
  cabeza: string;
  pies: number;
  manos: string;
}

interface Futbolista extends Cuerpo {
  botines: string;
}

interface Boxeador extends Cuerpo {
  guantes: string;
}