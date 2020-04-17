import React from 'react'
import * as S from './style'

const PaginationPost = ({next, previous}) => {
    return(
    <S.RecommendedWrapper>
        { previous && (
      <S.RecommendedLink
        to={previous.fields.slug}
        className='previous'
      >
        <h1 className='h5'> Anterior <br/>
            <p>{previous.frontmatter.title}</p>
        </h1>
        
      </S.RecommendedLink>)}
      { next && (
      <S.RecommendedLink
        to={next.fields.slug}
        className='next'
      >
        <h1 className='h5'>Próximo <br/>
            <p>{next.frontmatter.title}</p>
        </h1>
      </S.RecommendedLink>
      )}
  </S.RecommendedWrapper>
)}

export default PaginationPost