import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function CountryDetail() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(res => setCountry(res.data[0]))
      .catch(() => setError("Erro ao carregar detalhes do país."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-4">Carregando...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!country) return <p className="p-4">País não encontrado.</p>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Voltar</Link>
      <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
      <img src={country.flags.svg} alt={`Bandeira de ${country.name.common}`} className="w-48 mb-4 rounded shadow" />
      <p><strong>Nome oficial:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Continente:</strong> {country.region}</p>
      <p><strong>População:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Área:</strong> {country.area.toLocaleString()} km²</p>
    </div>
  );
}

export default CountryDetail;
