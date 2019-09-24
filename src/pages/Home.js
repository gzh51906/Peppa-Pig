import React,{Component} from 'react'
import { Row, Col,Input,Icon,Carousel} from 'antd';
//引入外部样式
import '@/style/home.scss';

const { Search } = Input;

class Home extends Component{
    state ={
        tag:[
            {imgurl:'../img/home/logo_cat_guide.png',
             text:'特色达人'},
            {imgurl:'../img/home/logo_cat_plan.png',
             text:'机场包机'},
            {imgurl:'../img/home/logo_cat_car.png',
              text:'畅游包车'},
            {imgurl:'../img/home/logo_cat_dest1.png',
             text:'目的地'},
            {imgurl:'../img/home/logo_cat_dest.png',
              text:'行程定制'},
        ]
    }
    render(){
        return ( 
           <div style={{paddingTop:'60px'}}>
             <Row gutter={10} style={{padding:'5px 10px',height:'60px',lineHeight:'60px',position:'fixed',top:0}}>
                <Col span={7}>
                    <img style={{width:'85%',height:'80%'}} src="https://pic.8pig.com/img/h5/new/common/logo_3x.png@.webp" />
                </Col>
                <Col span={12}>
                <Input
                    placeholder="想去哪里"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Col>
                <Col span={5} style={{color:'#ff5e69',fontSize:'14px',textAlign:'center'}}>
                    <span>登陆</span>/
                    <span>注册</span>
                </Col>
             </Row>
             {/* 轮播图 */}
             <Carousel autoplay>
                <div>
                  <img src="https://pic.8pig.com/operation/h5Home/181206154443500e85094d9a0182afd0.jpg"/>
                </div>
                <div>
                  <img src="https://pic.8pig.com/operation/h5Home/181206171205264285749922717e80e7.jpg"/>
                </div>
                <div>
                  <img src="https://8pig-file.oss-cn-shenzhen.aliyuncs.com/operation/webhome/quanqiubang.jpg"/>
                </div>
             </Carousel>
             {/* tag */}
             <Row  type="flex" justify="space-around"  style={{textAlign:'center',padding:'10px'}}>
               {
                   this.state.tag.map((item)=>{
                     return  <Col span={4} key={item.text}>
                     <p><img style={{width:'60%'}} src={item.imgurl}/></p>
                     <span>{item.text}</span>
                   </Col>  
                   })
               }     
            </Row>
            {/* 优质达人 */}
            <h2 className="daRen">优质达人 
               <span className="people">更多></span>
            </h2>
           </div>
        )
    }
}

export default Home