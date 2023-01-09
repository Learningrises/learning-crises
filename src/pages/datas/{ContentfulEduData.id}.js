import { graphql, navigate } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import Seo from '../../components/seo'
import { convertDate } from '../../utils/convertDate'
import * as dataPageStyles from '../../styling/style.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const EduDataPage = (props) => {
    console.log(props)
    return (
        <Layout>
            <section className= {dataPageStyles.container1}>
                <div  className= {dataPageStyles.shareHeader}>
                    <h4>{ props.data.contentfulEduData.title }</h4>
                </div>
                <div className= {dataPageStyles.shareAuthor}>
                    <p>Posted on { convertDate(props.data.contentfulEduData.createdAt) }</p>
                </div>
                <div className= {dataPageStyles.shareImage}>
                    <img 
                        alt='infographics image'
                        src={ props.data.contentfulEduData.infographics.url }
                        className = {dataPageStyles.shareImagee}
                    />
                </div>
                <div className = {dataPageStyles.goButtonCon}>
                  <button  
                    onClick={ () => navigate(-1) }
                    className = {dataPageStyles.goButton}
                  >Go Back</button>                             
                </div>
                <div className={dataPageStyles.moreSection}>
                  <h1>You may also be interested in more content on EduInsight</h1>
                  <div className={dataPageStyles.moreSectionGrids}>
                      <div className= {dataPageStyles.moreSectionGrid}>
                        <div className= {dataPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {dataPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>A Place of learning and Enlightenment</h3>
                          <p>Posted on Fri Oct 28 2022</p>
                          <button>View</button>
                        </div>  
                      </div>
                      <div className= {dataPageStyles.moreSectionGrid}>
                        <div className= {dataPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {dataPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>A Place of learning and Enlightenment</h3>
                          <p>Posted on Fri Oct 28 2022</p>
                          <button>View</button>
                        </div>  
                      </div>
                      <div className= {dataPageStyles.moreSectionGrid}>
                        <div className= {dataPageStyles.moreSectionGridImage}>
                        <StaticImage alt='moreImage' src='../../images/Rectangle 3.png'  className= {dataPageStyles.moreSectionGridImg}/>
                        </div>
                        <div>
                          <h3>A Place of learning and Enlightenment</h3>
                          <p>Posted on Fri Oct 28 2022</p>
                          <button>View</button>
                        </div>  
                      </div>
                  </div>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    contentfulEduData(id: {eq: $id}) {
      id
      createdAt
      infographics {
        url
        gatsbyImageData(layout: FULL_WIDTH)
      }
      title
    }
  }
`;

export default EduDataPage

export const Head = () => <Seo title="EduData Post Page" />