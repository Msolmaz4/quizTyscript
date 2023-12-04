interface Props {
  question: string;
  answers: string;
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}

const Card: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        {" "}
        Question:{questionNr} / {totalQuestions}
      </p>
      {/*Bu belirli kod parçası, dangerouslySetInnerHTML prop'unu kullanarak HTML içeriğini güvenli bir şekilde enjekte etmeye çalışıyor. Bu prop, adından da anlaşılacağı gibi "tehlikeli" bir API'dir, çünkü kullanıcı girişi doğrudan HTML olarak işlenir ve potansiyel güvenlik açıklarına yol açabilir.

dangerouslySetInnerHTML kullanılmasının ana nedeni, genellikle bir dizi içeriği veya başka bir kaynaktan gelen HTML'i içeren bir dizeyi render etme ihtiyacıdır. Ancak, bu prop'u kullanmak yerine mümkünse başka bir güvenli alternatif bulunması önerilir, çünkü bu prop doğrudan XSS (Cross-Site Scripting) saldırılarına açık olabilir.

Eğer bu kullanımı kaçınılmazsa, gönderilen HTML içeriği mutlaka güvenilir bir kaynaktan gelmeli ve güvenlik önlemleri alınmalıdır. Kullanıcı girişlerinden gelen verilerin doğrudan HTML olarak işlenmesi, kötü niyetli kullanıcıların kod enjeksiyonu yapmasına neden olabilir.  */}
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      {answers?.map((answer)=>(
           <div>
            <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html:answer}}></span>
            </button>
           </div>
      ))}
    </div>
  );
};
export default Card;
