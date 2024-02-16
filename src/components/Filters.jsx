function Filters({handleFilterQuote, handleFilterCharacter}) {

    const handleInputQuote = (event) => {
      console.log(event.currentTarget.value);
      handleFilterQuote(event.currentTarget.value);
    };
    const handleInputCharacter = (event) => {
        console.log(event.currentTarget.value);
        handleFilterCharacter(event.currentTarget.value);
      };
    return (
    <form className='filters__container'>
        <h2>Filtrar por frase</h2>
        <input className="filter_quote_input" type="text" onInput={handleInputQuote}/>
        <h2>Filtrar por personaje</h2>
        <select className="filter_character_input" type="text" onInput={handleInputCharacter}>
            <option value="">Todos</option>
            <option value="ross">Ross</option>
            <option value="monica">Monica</option>
            <option value="joey">Joey</option>
            <option value="phoebe">Phoebe</option>
            <option value="chandler">Chandler</option>
            <option value="rachel">Rachel</option>
        </select>
    </form>
    );
  }
  
  export default Filters;