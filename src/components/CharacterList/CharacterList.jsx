import React, { Component } from 'react';
import './CharacterList.css'

class CharacterList extends Component {
    render () {
        return (
          <div>
            {this.props.characters.map((character) => {
                return (
                  <div className="character-container" key={character.id}>
                    <img alt="thumbnail" src={character.thumbnail.path + "/portrait_fantastic." + character.thumbnail.extension}/>
                    <li className="character-list" key={character.id}><a href={character.urls[1].url}
                    rel="noopener noreferrer" target="_blank">{character.name}</a>
                    <p>{character.description}</p>
                    </li>
                  </div>
                )
            })}
          </div>
        )
    }
}

export default CharacterList;