Vim�UnDo� �(j��Q.��������OW�d�ش{�.�����  7   ;                                              AS card_type,   {   :                       \�_�    _�                     q        ����                                                                                                                                                                                                                                                                                                                            p   	       �   	       V   	    \��     �   q   s  -    5�_�                    r        ����                                                                                                                                                                                                                                                                                                                            p   	       �   	       V   	    \��     �   q   z  .       �   r   s  .    5�_�                    r        ����                                                                                                                                                                                                                                                                                                                            r           y           V        \��    �   q   z  5      	    (CASE            WHEN   >             JSON_EXTRACT(raw, '$.debit') = 'Yes' THEN 'debit'            WHEN   >             JSON_EXTRACT(raw, '$.debit') = 'No' THEN 'credit'            ELSE NULL END   	        )           AS card_type,5�_�                    r   
    ����                                                                                                                                                                                                                                                                                                                            y   
       r   
       V   
    \�R�     �   q   |  -    �   r   s  -    �   q   r                (CASE              WHEN   @               JSON_EXTRACT(raw, '$.debit') = 'Yes' THEN 'debit'              WHEN   @               JSON_EXTRACT(raw, '$.debit') = 'No' THEN 'credit'              ELSE NULL END             )             AS card_type,5�_�                    r        ����                                                                                                                                                                                                                                                                                                                            r          {          V       \�R�    �   q   |  7   
   	    (CASE            WHEN   @             JSON_EXTRACT(c.raw, '$.debit') = 'Yes' THEN 'debit'            WHEN   W             c.raw IS NULL OR JSON_EXTRACT(c.raw, '$.debit') = 'Unknown' THEN 'unknown'            WHEN   @             JSON_EXTRACT(c.raw, '$.debit') = 'No' THEN 'credit'            ELSE NULL END   	        )   9                                            AS card_type,5�_�                     {   :    ����                                                                                                                                                                                                                                                                                                                                                             \�_�    �   z   |  7      ;                                              AS card_type,5��