import React from 'react';

const Introduction = () => {
    return(
        <div className="row mt-5">
            <div className="col-md-4 col-sm-12 mt-2">
                <h2 style={{color: '#e63791'}}>請留意你的BowtieGo級別</h2>
                <p style={{color:'#071326'}}><strong>不同級別的 BowtieGo，可享有不同醫療範疇的優惠。如欲查看所有 BowtieGo 醫療網絡的醫生，請
                <span><a href="/" style={{color: '#e63791'}}>按此</a></span>。</strong></p>
            </div>
            <div className="col-md-4 col-sm-12 mt-2">
                <h2 style={{color: '#e63791'}}>請先預約</h2>
                <strong><p style={{color:'#071326'}}>部份診所可能較為繁忙。請先打電話預約，以確保求診成功。</p>
                <p style={{color:'#071326'}}>部分診所設有特定預約服務。請在醫生資料中查看該醫生是否有提供預約服務。</p></strong>
            </div>
            <div className="col-md-4 col-sm-12 mt-2">
                <h2 style={{color: '#e63791'}}>請留意收費內容</h2>
                <strong><p style={{color:'#071326'}}>以下列明的收費是 BowtieGo 專享的會員價，當中包含診症服務。部份診所收費會包含診金及基本藥物。</p>
                <p style={{color:'#071326'}}>如包括基本藥物，請留意基本藥物供應的日數或單位，個別中醫會包 2 日或 2 包基本草藥。</p>
                <p style={{color:'#071326'}}>額外藥物、其他醫療程序或檢查 (例如手術、照X光、抽血、儀器協助檢查等)，均需以正價支付。請於同意接受相關服務前向診所確認價錢。</p>
                <p style={{color:'#071326'}}>洗牙服務會由受認可牙齒衛生員或牙醫提供。口腔檢查則由牙醫提供。</p></strong>
            </div>
        </div>
    )
}

export default Introduction;