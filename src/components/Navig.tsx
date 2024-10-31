interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavigProps {
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function Navig({ setPokemonIndex, pokemonList }: NavigProps) {

	return (
		<div>

		</div>
	);
}

export default Navig;