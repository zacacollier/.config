Vim�UnDo� O�!�߅B*^��`5�s\�<~Wyn9�a�;$N�Q      Wexport const recordNameChange = ({ cognitoId, firstName, lastName, loggingContext }) =>             	       	   	   	    \��    _�                     
       ����                                                                                                                                                                                                                                                                                                                                                             \��Q     �   
               �   
            5�_�                       N    ����                                                                                                                                                                                                                                                                                                                                                             \��a     �                 Nexport const recordEmailChange = ({ cognitoId, emailAddress, loggingContext })5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V       \��f     �               �               �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       \��A     �               3import { NameChangeEvent } from '../domain/events';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       \��E     �               ?    event: new NameChangeEvent(cognitoId, firstName, lastName),�             5�_�                       2    ����                                                                                                                                                                                                                                                                                                                               2          D       v   D    \��G     �               G    event: new EmailAddressChangeEvent(cognitoId, firstName, lastName),5�_�                       2    ����                                                                                                                                                                                                                                                                                                                               2          D       v   D    \��G    �               4    event: new EmailAddressChangeEvent(cognitoId, ),5�_�      	                 !    ����                                                                                                                                                                                                                                                                                                                               2          D       v   D    \��}     �               Qexport const recordEmailChange = ({ cognitoId, emailAddress, loggingContext }) =>5�_�                  	           ����                                                                                                                                                                                                                                                                                                                               2          D       v   D    \��    �               Wexport const recordNameChange = ({ cognitoId, firstName, lastName, loggingContext }) =>5��